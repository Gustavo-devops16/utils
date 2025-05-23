import { unitsWritten, tensWritten, hundredsWritten, thousandsWritten, units, tens, hundreds, thousands } from "./lists";



export class NumberConverter {

	private parseNumber(normalizedNumber: string){
		const parsedNumber = parseInt(normalizedNumber);
		if(Number.isNaN(parsedNumber)){
			
			const finalNumber = this.stringToNumber(normalizedNumber);

			console.log(finalNumber)
			return finalNumber;
		}
		return parsedNumber;
	}

	private async stringToNumber(normalizedNumber: string){
		let words = normalizedNumber.split(" ");
		
		let valueUnit: number = 0, valueTens: number = 0, valueHundreds: number = 0, valueThousands: number = 0;
		
		let valueUnitNumerate: number = 0
		let valueTensNumerate: number = 0
		let valueHundredsNumerate: number = 0
		let valueThousandsNumerate: number = 0;
		
		console.log(words)
		for (let i = 0; i < words.length; i++){

			if(words[i+1] == "mil"){
				console.log("tem mil")
				words[i] = `${words[i]} ${words[i+1]}`;
				console.log(words[i])
				words.splice(i+1, 1);
			}

			// 
			let idxUnitNumerate = units.indexOf(parseInt(words[i])); 
			let idxTensNumerate = tens.indexOf(parseInt(words[i])); 
			let idxHundredsNumerate = hundreds.indexOf(parseInt(words[i])); 
			let idxThousandsNumerate = thousands.indexOf(parseInt(words[i]));
				
		
			let idxUnit = unitsWritten.indexOf(words[i]);
			let idxTens = tensWritten.indexOf(words[i]);
			let idxHundreds = hundredsWritten.indexOf(words[i]);
			let idxThousands = thousandsWritten.indexOf(words[i]);
					
			valueUnitNumerate += idxUnitNumerate === -1 ? 0 : units[idxUnitNumerate];
			valueTensNumerate += idxTensNumerate === -1 ? 0 : tens[idxTensNumerate];
			valueHundredsNumerate += idxHundredsNumerate === -1 ? 0 : hundreds[idxHundredsNumerate];
			valueThousandsNumerate += idxThousandsNumerate === -1 ? 0 : thousands[idxThousandsNumerate];
			console.log(valueUnitNumerate, valueTensNumerate, valueHundredsNumerate, valueThousandsNumerate)

			valueUnit += idxUnit === -1 ? 0 : units[idxUnit];
			valueTens += idxTens === -1 ? 0 : tens[idxTens];
			valueHundreds += idxHundreds === -1 ? 0 : hundreds[idxHundreds];
			valueThousands += idxThousands === -1 ? 0 : thousands[idxThousands];
			console.log(valueUnit, valueTens, valueHundreds, valueThousands)
		}
						
		const finalNumerate = valueUnitNumerate + valueTensNumerate + valueHundredsNumerate + valueThousandsNumerate;
		
		const finalNumber = valueThousands + valueHundreds + valueTens + valueUnit + finalNumerate;

		if (finalNumber === 0){
			return "Indefinido";
		}
		
		return finalNumber;	
	}


	private async convertNumber(rawNumber: any) {
		//dividir em functions 
		if (!rawNumber) {
			return "Indefinido";
		}

		if (typeof rawNumber === 'number'){
			return rawNumber;
		}

		const REGEX_UNICODE = "NFD";
		const REGEX_DIACRITICS = /[\u0300-\u036f]/g;
		const REGEX_SPACES = " e ";
		const REGEX_HYPHENS = /-/g;
	

	    console.log("raw number: ", rawNumber)
		let normalizedNumber = rawNumber
		.toLowerCase()
		.normalize(REGEX_UNICODE)
	  	.replace(REGEX_DIACRITICS, "")
		.replace(REGEX_SPACES, ' ') 
		.replace(REGEX_HYPHENS, ' ');

		console.log(normalizedNumber)

		const parsedNumber = await this.parseNumber(normalizedNumber);

		return parsedNumber;
				
	}
}

