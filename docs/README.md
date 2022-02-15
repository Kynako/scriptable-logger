# scriptable-logger

`Logger` is a library to log for Scriptable.<br>


## Usage


```javascript
const Logger = importModule('logger');

Logger.log('log');
// 'log' in white color.

Logger.warn('warn');
// 'warn' in orange color.

Logger.error('error');
// 'error' in red color.

Logger.assert(true, 'This message is\'nt shown.');
// (nothing is logged.)

Logger.assert(false, 'This message is shown.');
// 'This message is shown.'

Logger.group()
Logger.log('> level 1');
// '  > level 1'
Logger.group()
Logger.log('> level 2');
// '    level 2'
Logger.groupEnd()
Logger.log('< level 1');
// '  level 1'
Logger.groupEnd()

Logger.groupIndentation = 4;
Logger.group()
Logger.log('> Indents 4 spaces.');
Logger.groupEnd();


Logger.count();
// 'default: 1'
Logger.count();
// 'default: 2'
Logger.count('counter1');
// 'counter1: 1'
Logger.count('counter1');
// 'counter1: 2'

Logger.countReset();
// 'default: 0'
Logger.countReset('counter1');
// 'counter1: 0'

Logger.pretty({hello: 'world'});
// {
//   hello: "world"
// }
Logger.pretty({a: 'A', b: 'B'}, ['b'], '\t');
// {
// 	"b": "B"
// }

Logger.time();
Logger.time('timer1');

Logger.timeEnd();
// 'default: 0ms'
Timer.schedule(1000, 0, Logger.timeEnd.bind(this, 'timer1'));
// 'timer1: 1001ms'
```


## Reference

See [REFERENCE.md](./REFERENCE.md)

## License

[MIT license](./LICENSE)