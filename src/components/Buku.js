import React from 'react';

const Buku = ({ buku, bukuDipilih }) => {
    // console.log(buku); // intip isi buku

    const onClickHandler = () => {
        bukuDipilih(buku)
    }

    return (
        <div className='list-group-item'
            onClick={onClickHandler}
            style={{ cursor: 'pointer' }} >
            <h3>{buku.judul}</h3>
            <p>Pengarang: {buku.pengarang}</p>
        </div >
    )
}

export default Buku;