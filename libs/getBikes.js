import path from 'path'
import {promises as fs} from 'fs'


export async function getBikes(){
    const filePath = path.join(process.cwd(), '/mock/bikes.json')
    return JSON.parse(await fs.readFile(filePath,'utf-8'))
}