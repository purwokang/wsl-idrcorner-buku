import React from 'react'

import Buku from './Buku'

const DaftarBuku = ({ daftarbuku }) => {

    // console.log(props.daftarbuku); // mengintip isi props.daftarbuku

    const renderList = daftarbuku.map(buku => {
        return (
            <Buku key={buku.id} buku={buku} />
        )
    })

    return (
        <div>
            {renderList}
        </div>
    )
}

export default DaftarBuku
