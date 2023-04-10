const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			collected:[],
			characters:[],
			locations:[],
			episodes:[],
			BASE_API_URL: "https://rickandmortyapi.com/api"
		},
		actions: {
			async getCharactersFromApi(){
				const currentStore = getStore();
				try {
					const response = await fetch(`${currentStore.BASE_API_URL}/character`);
					const body = await response.json();
					if (!response.ok) throw new Error (`${body}`);
					setStore({
						characters:body.results});
				} catch (error){
					console.log(error);
				} 
			},
			toggleCharacterCollected(character){
				const currentStore = getStore();
				const characterFound = currentStore.collected.find(
					(_character) => _character.url === character.url
				);
				if (characterFound) {
					setStore({
						collected: currentStore.collected.filter(
							(_character) => _character.url !== character.url
						)
					});
				} else{
					setStore({
						collected: [
							...currentStore.collected,
							character
						]
					})
				}
			},

			async getLocationsFromApi(){
				const currentStore = getStore();
				try {
					const response = await fetch(`${currentStore.BASE_API_URL}/location`);
					const body = await response.json();
					if (!response.ok) throw new Error (`${body}`);
					setStore({
						locations:body.results});
				} catch (error){
					console.log(error);
				} 
			},
			toggleLocationCollected(location){
				const currentStore = getStore();
				const locationFound = currentStore.collected.find(
					(_location) => _location.url === location.url
				);
				if (locationFound) {
					setStore({
						collected: currentStore.collected.filter(
							(_location) => _location.url !== location.url
						)
					});
				} else{
					setStore({
						collected: [
							...currentStore.collected,
							location
						]
					})
				}
			},

			async getEpisodesFromApi(){
				const currentStore = getStore();
				try {
					const response = await fetch(`${currentStore.BASE_API_URL}/episode`);
					const body = await response.json();
					if (!response.ok) throw new Error (`${body}`);
					setStore({
						episodes:body.results});
				} catch (error){
					console.log(error);
				} 
			},
			toggleEpisodeCollected(episode){
				const currentStore = getStore();
				const episodeFound = currentStore.collected.find(
					(_episode) => _episode.url === episode.url
				);
				if (episodeFound) {
					setStore({
						collected: currentStore.collected.filter(
							(_episode) => _episode.url !== episode.url
						)
					});
				} else{
					setStore({
						collected: [
							...currentStore.collected,
							episode
						]
					})
				}
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
