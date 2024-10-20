let btnTambah = document.getElementById('btn-tambah');
let output = document.getElementById('output');

btnTambah.onclick = (e) => {
   let input = document.getElementById('assignment');
   let title = input.value.trim();
   if (title == "") {
      alert("Inputan masih kosong");
      return;
   }
   let task = document.createElement("div");
   task.id = `${Date.now()}`;
   task.className = `flex justify-start items-start gap-2`;
   task.innerHTML = `
   <div class="w-64 ml-6 h-12 rounded-lg mt-1">
         <p class="flex justify-start text-2xl items-center pt-2 ml-2">${title}</p> 
         </div>
         <input type="button" id="btn-selesai" value="SELESAI" data-task="${task.id}"
                class="bg-green-400 p-3 rounded-lg mt-1">
         <input type="button" id="btn-hapus" value="HAPUS" data-task="${task.id}"
                class="bg-red-400 rounded-lg p-3 mt-1">
   `;
   output.appendChild(task);
   input.value = "";
   e.preventDefault();
}
