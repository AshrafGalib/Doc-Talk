const getBookedDocFromLocalStorage =()=>{
    const storedBookedDocString=localStorage.getItem('Booked Doctor')
    if(storedBookedDocString){
        const storedBookedDoc =JSON.parse(storedBookedDocString)
        return storedBookedDoc
    }
    return[]
}

const setBookedDocToLocalStorage=(regNo)=>{
const bookedDoc =getBookedDocFromLocalStorage()
const newBookedDoc =[...bookedDoc,regNo]
//save
const StrigifiedNewBookedDoc = JSON.stringify(newBookedDoc)
localStorage.setItem('Booked Doctor',StrigifiedNewBookedDoc)
}
export{getBookedDocFromLocalStorage,setBookedDocToLocalStorage}