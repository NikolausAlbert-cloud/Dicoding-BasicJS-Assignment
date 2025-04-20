function fibonacci(n) {
  if (n <= 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  } else {
    const Array = fibonacci(n - 1);
    Array.push(Array[Array.length - 1] + Array[Array.length - 2]);
    return Array;
  }
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
