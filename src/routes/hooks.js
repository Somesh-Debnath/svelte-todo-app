import { readable } from 'svelte/store';

/**
 * @param {any} initValue
 */
function useState(initValue){
    let setValue
    const nameStore = readable(initValue, set => {
	    setValue = set
    })
    nameStore.subscribe(value=>{})
    return [nameStore,setValue]
}
export {
    useState
}