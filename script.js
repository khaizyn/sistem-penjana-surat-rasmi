function janaSurat() {
    const nama = document.getElementById('namaPengirim').value;
    const alamatP = document.getElementById('alamatPengirim').value;
    const penerima = document.getElementById('namaPenerima').value;
    const alamatT = document.getElementById('alamatPenerima').value;
    const tajuk = document.getElementById('tajukSurat').value;
    const isi = document.getElementById('isiSurat').value;

    // Mendapatkan tarikh hari ini
    const tarikh = new Date();
    const bulan = ["JANUARI", "FEBRUARI", "MAC", "APRIL", "MEI", "JUN", "JULAI", "OGOS", "SEPTEMBER", "OKTOBER", "NOVEMBER", "DISEMBER"];
    const tarikhFormat = `${tarikh.getDate()} ${bulan[tarikh.getMonth()]} ${tarikh.getFullYear()}`;

    const template = `
        <div style="text-align: left;">
            <strong>${nama}</strong><br>
            ${alamatP.replace(/\n/g, '<br>')}
        </div>
        <div class="garis"></div>
        <div style="text-align: left; margin-top: 10px;">
            ${penerima}<br>
            ${alamatT.replace(/\n/g, '<br>')}
            <br><br>
        <div style="text-align: right;">
            <strong>TARIKH: ${tarikhFormat}</strong>
        </div>
        <br>
        <p>Tuan/Puan,</p>
        <div class="tajuk-huruf-besar">${tajuk}</div>
        <p>${isi.replace(/\n/g, '<br>')}</p>
        <br>
        <p>Sekian, terima kasih.</p>
        <br><br>
        <p>Yang benar,</p>
        <br><br>
        <strong>__________________</strong><br>
        (${nama.toUpperCase()})
    `;

    document.getElementById('kertas').innerHTML = template;
    document.getElementById('printArea').style.display = 'block';
    
    // Skrol automatik ke bahagian bawah untuk lihat preview
    window.scrollTo(0, document.body.scrollHeight);
}
