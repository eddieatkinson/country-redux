export default function(state = [], action){
	if(action.type === "ADD_COUNTRY_ACTION"){
		console.log("*******************");
		console.log(action.payload.data);
		console.log("*******************");
		return action.payload.data
	}else{
		return state;	
	}
}