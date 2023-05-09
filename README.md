<p align="center"><img src="https://github.com/dennis0324/cpu-Scheduler-Simulator/assets/50710829/01565236-25c8-4323-9c06-3b10375cae65"></p>

## Usage


### Install Dependencies
```
$ cd cpu-Scheduler-Simulator-web

# using yarn or npm
$ yarn (or `npm install`)

# using pnpm
$ pnpm install --shamefully-hoist
```

### Use it

```
# development mode
$ yarn dev (or `npm run dev` or `pnpm run dev`)

# production build
$ yarn build (or `npm run build` or `pnpm run build`)
$ npm run build:win64
```

### Load Txt File
you can import txt file in to program
you need to follow the format
```
[lines of process(PCB)
[pid:any,brustTime:number,arrivalTime:number,priority:number] * lines
timeQuantum:number
```
eg)

![image](https://github.com/dennis0324/cpu-Scheduler-Simulator/assets/50710829/98cc9b32-b699-4205-a703-0e8a63beda2b)

