/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */
import Item from './Item.js';


class Inventory extends Item {
  constructor() {
    super();
    this.items = [];
  }

  addItem(item) {
    this.items.push({id: item.id , name: item.name, quantity: item.quantity, price: item.price});
  }


  removeItem(id) {
    this.items =this.items.filter(item => item.id !== id);
  }

  listItems() {
    if (this.items.length === 0) {
      return "Inventory is empty";
    }

    let output = "";
    this.items.forEach(item => {
      output += this.displayDetails(item) + "\n";
    });
    return output;
  }
}


// Jangan hapus kode di bawah ini!
export default Inventory;
