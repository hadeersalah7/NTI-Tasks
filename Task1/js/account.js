const addAccount = document.querySelector("#account")
const tableInfo = document.querySelector("#info")
const Accounts = ['name', "accNumber", 'balance', 'addresse']

const readDataFromStorage = (storageKey) => {
    let data = []
        try {
            data = JSON.parse(localStorage.getItem(storageKey)) || []
            if(!Array.isArray(data)) throw new Error ("No Array")
        }
    catch(e) {
        data = []
    }

    return data
} 

const writeDataFromStorage = (data, storageKey) => {
    localStorage.setItem(storageKey, JSON.stringify(data))
}

const formSubmit = function(e){
    e.preventDefault()
    let balance ={id: new Date}
    Accounts.forEach(acc => balance[acc] = this.elements[acc].value)

    const balances = readDataFromStorage( "balances")
    balances.push(balance)
    writeDataFromStorage(tasks, "tasks")

    // window.location.href="../index.html"
}

const createMyOwnElement = (parent, elementTag, text, classes) => {

const el = document.createElement(elementTag)
parent.appendChild(el)

if (text) el.textContent = text;
if(classes) el.className = classes;

return el

}

//delete Account: 
const delAccount = (accounts, i) => {
    accounts.splice(i, 1)

    writeDataFromStorage(accounts, "accounts")

    showAll()
}


//show single
const showSingle = (account, i, accounts) => {
    const tr = createMyOwnElement(info, "tr", null, null)
    createMyOwnElement(tr, "td", i+1 , null)
    Accounts.forEach(head => createMyOwnElement(tr, "td", account[head], null))

    const action = createMyOwnElement(tr, "td", null, null)
    const editBtn = createMyOwnElement(action, "button", "Edit", "btn btn-warning me-2")
    const showBtn = createMyOwnElement(editBtn, "button", "Show", "btn btn-primary me-2")
    const deleteBtn = createMyOwnElement(showBtn, "button", "Delete", "btn btn-danger me-2")
    deleteBtn.addEventListener("click", () => {delAccount(accounts, i)})
}

showAll = () => {
    info.innerHtml = ""
    
    const accounts = readDataFromStorage("accounts")

    accounts.forEach((accounts, index) => showSingle(account, index, accounts))
}

if(addAccount) addAccount.addEventListener("submit", formSubmit)

if(info) showAll()