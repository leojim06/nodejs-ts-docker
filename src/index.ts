import chalk from 'chalk';
import app from './App'

const port = process.env.PORT || 3000

try {
    app.listen(port, (): void => {
        console.log(chalk.greenBright(`server is listening on ${port}`))
    })
} catch (error) {
    console.log(chalk.redBright(`Error occurred: ${error.message}`))
}
