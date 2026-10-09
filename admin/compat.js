(function () {
  'use strict';

  // Sveltia CMS uses several recently added Web/JavaScript APIs. Keep the
  // admin usable on older mobile browsers that can otherwise run the CMS.
  if (typeof Promise.withResolvers !== 'function') {
    Promise.withResolvers = function () {
      var resolve;
      var reject;
      var promise = new Promise(function (resolvePromise, rejectPromise) {
        resolve = resolvePromise;
        reject = rejectPromise;
      });

      return { promise: promise, resolve: resolve, reject: reject };
    };
  }

  if (typeof Map.groupBy !== 'function') {
    Map.groupBy = function (items, callback) {
      var result = new Map();
      var index = 0;

      for (var iterator = items[Symbol.iterator](), step; !(step = iterator.next()).done; index += 1) {
        var value = step.value;
        var key = callback(value, index);
        var group = result.get(key);

        if (group) {
          group.push(value);
        } else {
          result.set(key, [value]);
        }
      }

      return result;
    };
  }

  if (typeof Array.prototype.toSorted !== 'function') {
    Object.defineProperty(Array.prototype, 'toSorted', {
      configurable: true,
      writable: true,
      value: function (compareFn) {
        return Array.prototype.slice.call(this).sort(compareFn);
      },
    });
  }

  if (typeof Array.prototype.with !== 'function') {
    Object.defineProperty(Array.prototype, 'with', {
      configurable: true,
      writable: true,
      value: function (index, value) {
        var copy = Array.prototype.slice.call(this);
        var actualIndex = index < 0 ? copy.length + index : index;

        if (actualIndex < 0 || actualIndex >= copy.length) {
          throw new RangeError('Invalid index');
        }

        copy[actualIndex] = value;
        return copy;
      },
    });
  }

  if (typeof AbortSignal !== 'undefined' && typeof AbortSignal.timeout !== 'function') {
    AbortSignal.timeout = function (milliseconds) {
      var controller = new AbortController();
      setTimeout(function () {
        controller.abort(new DOMException('The operation timed out.', 'TimeoutError'));
      }, milliseconds);
      return controller.signal;
    };
  }

  function bytesToBinary(bytes) {
    var binary = '';
    var chunkSize = 0x8000;

    for (var offset = 0; offset < bytes.length; offset += chunkSize) {
      binary += String.fromCharCode.apply(null, bytes.subarray(offset, offset + chunkSize));
    }

    return binary;
  }

  if (typeof Uint8Array.prototype.toBase64 !== 'function') {
    Object.defineProperty(Uint8Array.prototype, 'toBase64', {
      configurable: true,
      writable: true,
      value: function () {
        return btoa(bytesToBinary(this));
      },
    });
  }

  if (typeof Uint8Array.fromBase64 !== 'function') {
    Uint8Array.fromBase64 = function (value) {
      var binary = atob(value.replace(/\s/g, ''));
      var bytes = new Uint8Array(binary.length);

      for (var index = 0; index < binary.length; index += 1) {
        bytes[index] = binary.charCodeAt(index);
      }

      return bytes;
    };
  }
})();
