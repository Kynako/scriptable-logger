# Reference

---

- [Properties](#properties)
  - [+groupIndentation](#groupindentation)
- [Methods](#methods)
  - [+log([msg])](#logmsg)
  - [+warn([msg])](#warnmsg)
  - [+error([msg])](#errormsg)
  - [+assert(assertion[, msg])](#assertassertion-msg)
  - [+group()](#group)
  - [+groupEnd()](#groupend)
  - [+count([label])](#countlabel)
  - [+countReset([label])](#countresetlabel)
  - [+time([label])](#timelabel)
  - [+timeLog([label])](#timeloglabel)
  - [+timeEnd([label])](#timeendlabel)
  - [+pretty(value[, replacer[, space]])](#prettyvalue-replacer-space)

---

## Properties

### +groupIndentation

Indicates the number of space characters to use as white space for indenting purposes.

```typescript
+groupIndentation?: Number = 2
```

---

## Methods

### +log([msg])

Logs a message to the console. This method is mostly the same as `console.log()`.

```typescript
+log(msg?: any): void
```

<table>
  <tr>
    <th>PARAMETER</th>
    <th>TYPE</th>
    <th>OPTIONAL</th>
    <th>DESCRIPTION</th>
  </tr>
  <tr>
    <td>data</td>
    <td>String</td>
    <td>&#9745;</td>
    <td>Message to the console.</td>
  </tr>
</table>

---

### +warn([msg])

Logs a warning message to the msg. This methid is mostly the same as `console.warn()`.

```typescript
+warn(msg?: any): void
```

<table>
  <tr>
    <th>PARAMETER</th>
    <th>TYPE</th>
    <th>OPTIONAL</th>
    <th>DESCRIPTION</th>
  </tr>
  <tr>
    <td>data</td>
    <td>any</td>
    <td>&#9745;</td>
    <td>Message to the console.</td>
  </tr>
</table>

---

### +error([msg])

Logs a warning message to the msg. This methid is mostly the same as `console.error()`.

```typescript
+error(msg?: any): void
```

<table>
  <tr>
    <th>PARAMETER</th>
    <th>TYPE</th>
    <th>OPTIONAL</th>
    <th>DESCRIPTION</th>
  </tr>
  <tr>
    <td>data</td>
    <td>any</td>
    <td>&#9745;</td>
    <td>Message to the console.</td>
  </tr>
</table>

---

### +assert(assertion[, msg])

Logs an error message to the console if the assertion is false. If the asserton is true, nothing happens.

```typescript
+assert(assertion: any, msg?: any): void
```

<table>
  <tr>
    <th>PARAMETER</th>
    <th>TYPE</th>
    <th>OPTIONAL</th>
    <th>DESCRIPTION</th>
  </tr>
  <tr>
    <td>assertion</td>
    <td>any</td>
    <td></td>
    <td>Any boolean expression.</td>
  </tr>
  <tr>
    <td>msg</td>
    <td>any</td>
    <td>&#9745;</td>
    <td>Message to the console.</td>
  </tr>
</table>

#### Example

```javascript
const Logger = importModule('logger');
const input = 'foo';
Logger.assert(typeof input === 'number', '"input" is NOT type of Number!');
// '"input" is NOT type of Number!' is logged in red color.
```

---

### +group()

Adds an indent to the console after this method is called.

```typescript
+group(): void
```

---

### +groupEnd()

Removes an indent from the console this method is called.

```typescript
+groupEnd(): void
```

#### Example

```javascript
const Logger = importModule('logger');

Logger.group()
Logger.log('> level 1');
// '  > level 1' with log.
Logger.group()
Logger.warn('> level 2');
// '    level 2' with warning log.
Logger.groupEnd()
Logger.error('< level 1');
// '  level 1' with error log.
Logger.groupEnd()

Logger.groupIndentation = 4;
Logger.group()
Logger.log('> Indents 4 spaces.');
Logger.groupEnd();
```

---

### +count([label])

Logs the number of times that this particular call to count() has been called.

```typescript
+count(label?: String = 'default'): void
```

<table>
  <tr>
    <th>PARAMETER</th>
    <th>TYPE</th>
    <th>OPTIONAL</th>
    <th>DEFAULT</th>
    <th>DESCRIPTION</th>
  </tr>
  <tr>
    <td>label</td>
    <td>String</td>
    <td><code>'default'</code></td>
    <td>&#9745;</td>
    <td>The name of the timer to log to the console.</td>
  </tr>
</table>

---

### +countReset([label])

Resets the record of the number of times that this particular call to count() has been called.

```typescript
+countReset(label?: String = 'default'): void
```

<table>
  <tr>
    <th>PARAMETER</th>
    <th>TYPE</th>
    <th>OPTIONAL</th>
    <th>DEFAULT</th>
    <th>DESCRIPTION</th>
  </tr>
  <tr>
    <td>label</td>
    <td>String</td>
    <td><code>'default'</code></td>
    <td>&#9745;</td>
    <td>The name of the counter to log to the console.</td>
  </tr>
</table>

#### Example

```javascript
Logger.count()
// 'default: 1'
Logger.count()
// 'default: 2'
Logger.count('counter1');
// 'counter1: 1'
Logger.count('counter1');
// 'counter1: 2'

Logger.countReset();
// 'default: 0'
Logger.countReset('counter1');
// 'counter1: 0'
```

---

### +time([label])

Starts a timer you can use to track how long an operation task.

```typescript
+time(label?: String = 'default'): void
```

<table>
  <tr>
    <th>PARAMETER</th>
    <th>TYPE</th>
    <th>OPTIONAL</th>
    <th>DEFAULT</th>
    <th>DESCRIPTION</th>
  </tr>
  <tr>
    <td>label</td>
    <td>String</td>
    <td>&#9745;</td>
    <td><code>'default'</code></td>
    <td>The name of the timer to log to the console.</td>
  </tr>
</table>

---

### +timeLog([label])

Logs the current value of a timer that was previously started by calling `time()` to the console.

```typescript
+timeLog(label?: String = 'default'): void
```

<table>
  <tr>
    <th>PARAMETER</th>
    <th>TYPE</th>
    <th>OPTIONAL</th>
    <th>DEFAULT</th>
    <th>DESCRIPTION</th>
  </tr>
  <tr>
    <td>label</td>
    <td>String</td>
    <td>&#9745;</td>
    <td><code>'default'</code></td>
    <td>The name of the timer to log to the console.</td>
  </tr>
</table>

---

### +timeEnd([label])

Stops a tomer that was previously started by calling.

```typescript
+timeEnd(label?: String = 'default'): void
```

<table>
  <tr>
    <th>PARAMETER</th>
    <th>TYPE</th>
    <th>OPTIONAL</th>
    <th>DEFAULT</th>
    <th>DESCRIPTION</th>
  </tr>
  <tr>
    <td>label</td>
    <td>String</td>
    <td>&#9745;</td>
    <td><code>'default'</code></td>
    <td>The name of the timer to log to the console.</td>
  </tr>
</table>

#### Example

```javascript
const Logger = importModule('logger');

const alert = new Alert();
alert.title = 'Tap to cancel.';

Logger.time('answer time');
await alert.present();
Logger.timeEnd('answer time');
```

---

### +pretty(value[, replacer[, space]])

Formats and logs objects and arrays. This method is an alias for [`JSON.stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

```typescript
+pretty(value: any, replacer?: (Function|Null) = null, space?: (String|Number) = 2): void
```

<table>
  <tr>
    <th>PARAMETER</th>
    <th>TYPE</th>
    <th>OPTIONAL</th>
    <th>DEFAULT</th>
  </tr>
  <tr>
    <td>value</td>
    <td>any</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>replacer</td>
    <td>Function | Null</td>
    <td>&#9745;</td>
    <td><code>null</code></td>
  </tr>
  <tr>
    <td>space</td>
    <td>String | Number</td>
    <td>&#9745;</td>
    <td><code>2</code></td>
  </tr>
</table>