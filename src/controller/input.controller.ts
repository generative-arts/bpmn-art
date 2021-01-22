import * as fs from 'fs'

export class InputController {
  public static read(filepath: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) {
          reject(err)
        }
        resolve(data)
      })
    })
  }
}
