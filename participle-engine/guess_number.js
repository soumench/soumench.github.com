function guessNumber(word){
                                
	let plurals = {mice:1,men:1,women:1,people:1,children:1,geese:1,teeth:1,oxen:1,you:1};
	let AMBIGUOUS = {deer:1, moose:1, series:1, swine:1, salmon:1, means:1, aircraft:1, offspring:1, species:1, grapefruit:1,sheep:1,fish:1,shrimp:1};

	if(/^(few|a few|the few)\s/.test(word) ) {return PLURAL;}

	if(/^an?\s/.test(word) ) { return SINGULAR;}

	if( AMBIGUOUS[word]){return IDK;}

	if(/s$/.test(word) ){return PLURAL;}

	if(/^(many|most|some|all)\s/.test(word) ){return PLURAL;} 

	if( plurals[word]){return PLURAL;}

	return SINGULAR;
}