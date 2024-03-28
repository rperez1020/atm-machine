// ask for account
// if account does not exist, ask to create account
// ask what they want to do
// execute command
//  - view, withdraw, deposit

const Account = require('./account')
const CommandLine = require('./commandline')


async function main(){
    try{

        const accountName = await CommandLine.ask("Which account would you like to access? ")
        const account = await Account.find(accountName)
        if(account == null) await promptCreateAccount(accountName)
        if(account != null) await promptTask(account)
    }catch(e){
        CommandLine.print("ERROR: Please try again.")
    }
}

async function promptCreateAccount(accountName){
    const response = await CommandLine.ask("That account doesn't exist. Create account? (yes/no) ")

    if(response === 'yes'){
        return await Account.create(accountName)
    }
}

async function promptTask(account){
    const response = await CommandLine.ask("What would you like to do? (view/deposit/withdraw) ")
    if(response === 'deposit'){
        const amount = parseFloat(await CommandLine.ask("How much? "))
        await account.deposit(amount)
    }else if(response === 'withdraw'){
        const amount = parseFloat(await CommandLine.ask("How much? "))
        try{
            await account.withdraw(amount)
        }catch(e){
            CommandLine.print("Insufficient balance")
        }
    }
    CommandLine.print(`Your balance is ${account.balance}`)
}

main()