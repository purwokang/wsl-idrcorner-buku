import React, { Component } from 'react'
import DaftarBuku from './DaftarBuku'
import DetailBuku from './DetailBuku'

export class App extends Component {

    state = {
        daftarBuku: [
            { id: '1', judul: 'Dongeng Sebelum Tidur', pengarang: '3 Beradik', tahun: '1992', penerbit: 'Pustaka Cerita', sinopsis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cum ducimus laboriosam quidem asperiores aspernatur debitis in exercitationem dolores dolorum' },
            { id: '2', judul: 'Kata-Kata Mutiara', pengarang: 'Pujangga', tahun: '1985', penerbit: 'Lorem', sinopsis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quod recusandae sequi voluptatum. Natus consequuntur doloribus nostrum ducimus nihil cumque' },
            { id: '3', judul: 'Di Hulu Sungai Bertuah', pengarang: 'Agfi', tahun: '2003', penerbit: 'Ipsum', sinopsis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rerum suscipit consequatur a accusamus soluta, laboriosam quo fuga doloribus libero.' },
            { id: '4', judul: 'Tutorial React Native', pengarang: 'IDRcorner', tahun: '2019', penerbit: 'Lorem Ipsum', sinopsis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus fugit hic aliquam error officia cum in quis quae, vel provident.' },
            { id: '5', judul: 'Cerita Milenial 99', pengarang: 'Ababu', tahun: '2000', penerbit: 'Loreng Loreng', sinopsis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad beatae hic exercitationem ullam? Mollitia ad sunt quod enim quaerat soluta.' },
            { id: '6', judul: 'Maaf dari Cinta', pengarang: 'Element', tahun: '2002', penerbit: 'Setia Hati', sinopsis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum culpa ipsum laboriosam itaque, omnis eius? Aliquam, perferendis. Est, blanditiis tempore.' },
            { id: '7', judul: 'Open Your Eyes', pengarang: 'Mas Bro', tahun: '2007', penerbit: 'Persada Nusa', sinopsis: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore nobis facere, corporis accusantium labore a ipsa unde impedit laborum libero.' }
        ],
        bukuTerpilih: null
    }

    bukuDipilih = (buku) => {
        this.setState({
            bukuTerpilih: buku
        })
    }


    render() {
        return (
            <div className='container' >
                <br />
                <h1>DAFTAR BUKU</h1>
                <div className="row">
                    <div className="col-lg-8">
                        <DaftarBuku bukuDipilih={this.bukuDipilih} daftarbuku={this.state.daftarBuku} />
                    </div>
                    <div className="col-lg-4">
                        <DetailBuku buku={this.state.bukuTerpilih} />
                    </div>
                </div>


            </div>
        )
    }
}

export default App
