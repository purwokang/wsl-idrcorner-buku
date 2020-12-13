import React from 'react'

const DetailBuku = ({ buku }) => {
    if (!buku) {
        return (
            <div>Detail Buku...</div>
        )
    }

    return (
        <div className="table">
            <table className="table">
                <tr>
                    <td>JUDUL BUKU</td>
                    <td>{buku.judul}</td>
                </tr>
                <tr>
                    <td>PENGARANG</td>
                    <td>{buku.pengarang}</td>
                </tr>
                <tr>
                    <td>TAHUN TERBIT</td>
                    <td>{buku.tahun}</td>
                </tr>
                <tr>
                    <td>PENERBIT</td>
                    <td>{buku.penerbit}</td>
                </tr>
                <tr>
                    <td>SINOPSIS</td>
                    <td>{buku.sinopsis}</td>
                </tr>
            </table>
        </div>
    )
}

export default DetailBuku
