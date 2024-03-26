// ask for account
// if account does not exist, ask to create account
// ask what they want to do
// execute command
//  - view, withdraw, deposit

const Account = require('./account')
const CommandLine = require('./commandline')


async function main(){

    const accountName = await CommandLine.ask("Which account would you like to access? ")
    if(account == null) promptCreateAccount(accountName)
    const account = await Account.find(accountName)
    if(account){
        console.log('Found Account')
    } else {
        console.log('cannot find')
    }

}

function promptCreateAccount(accountName){
    
}

main()