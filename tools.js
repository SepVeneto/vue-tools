export default {
  typeOf(val) {
    const re = /\[object (\S+)\]/;
    const result = re.exec(Object.prototype.toString.call(val));
    return result[1];
  },
  deepCopy(origin) {
    const empty = {};
    Object.entries(origin).forEach(([key, value]) => {
      switch(this.typeOf(value)) {
        case
          'Object': Object.assign(empty, { [key]: this.deepCopy(value) });
          break;
        default: Object.assign(empty, { [key]: value });
      }
    })
    return empty;
  }
}