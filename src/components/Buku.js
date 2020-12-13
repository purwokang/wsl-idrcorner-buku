import React from 'react';

const Buku = ({ buku }) => {
    // console.log(buku); // intip isi buku
    return (
        <div className='list-group-item'>
            <h3>{buku.judul}</h3>
            <p>Pengarang: {buku.pengarang}</p>
        </div>
    )
}

export default Buku;