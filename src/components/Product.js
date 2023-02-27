import React, { Component } from "react";
import { variables } from "../api/Variables";

export class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            modalTitle: "",
            ProductName: "",
            ProductId: 0,
            ShopCode: 1,
            BarCode: "",
            Brand: "",
            Category: "",
            ProductCode: "",
            ProductDescr: "",
            PromoActive: "",
            PromoEndAt: "",
            PromoInitAt: "",
            PromoSalePrice: "",
            SalePrice: "",
            SubCategory: "",
            PhotoLink: ""
        }
    };

    refreshList() {
        fetch(variables.API_URL + 'product')
            .then(response => response.json())
            .then(data => {
                this.setState({ products: data });
            })
    };

    componentDidMount() {
        this.refreshList();
    };


    // changes
    changeProductName = (e) => {
        this.setState({ ProductName: e.target.value });
    };

    changeBarCode = (e) => {
        this.setState({ BarCode: e.target.value });
    };
    changeBrand = (e) => {
        this.setState({ Brand: e.target.value });
    };
    changeCategory = (e) => {
        this.setState({ Category: e.target.value });
    };
    changeProductCode = (e) => {
        this.setState({ ProductCode: e.target.value });
    };
    changeProductDescr = (e) => {
        this.setState({ ProductDescr: e.target.value });
    };
    changePromoEndAt = (e) => {
        this.setState({ PromoEndAt: e.target.value });
    };
    changePromoInitAt = (e) => {
        this.setState({ PromoInitAt: e.target.value });
    };
    changePromoSalePrice = (e) => {
        this.setState({ PromoSalePrice: e.target.value });
    };
    changeSalePrice = (e) => {
        this.setState({ SalePrice: e.target.value });
    };
    changeSubCategory = (e) => {
        this.setState({ SubCategory: e.target.value });
    };
    changePhotoLink = (e) => {
        this.setState({ PhotoLink: e.target.value });
    };


    //actions
    addClick() {
        this.setState({
            modalTitle: "Add product",
            ProductId: 0,
            ProductName: "",
            ShopCode: 1,
            BarCode: "",
            Brand: "",
            Category: "",
            ProductCode: "",
            ProductDescr: "",
            PromoActive: "",
            PromoEndAt: "",
            PromoInitAt: "",
            PromoSalePrice: "",
            SalePrice: "",
            SubCategory: "",
            PhotoLink: ""
        })
    }

    editClick(prod) {
        this.setState({
            modalTitle: "Edit product",
            ProductId: prod.ProductId,
            ProductName: prod.ProductName,
            ShopCode: 1,
            BarCode: prod.BarCode,
            Brand: prod.Brand,
            Category: prod.Category,
            ProductCode: prod.ProductCode,
            ProductDescr: prod.ProductDescr,
            PromoActive: prod.PromoActive,
            PromoEndAt: prod.PromoEndAt,
            PromoInitAt: prod.PromoInitAt,
            PromoSalePrice: prod.PromoSalePrice,
            SalePrice: prod.SalePrice,
            SubCategory: prod.SubCategory,
            PhotoLink: prod.PhotoLink
        })
    }

    createClick() {
        fetch(variables.API_URL + 'product', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ProductName: this.state.ProductName,
                ShopCode: 1,
                BarCode: this.state.BarCode,
                Brand: this.state.Brand,
                Category: this.state.Category,
                ProductCode: this.state.ProductCode,
                ProductDescr: this.state.ProductDescr,
                PromoActive: this.state.PromoActive,
                PromoEndAt: this.state.PromoEndAt,
                PromoInitAt: this.state.PromoInitAt,
                PromoSalePrice: this.state.PromoSalePrice,
                SalePrice: this.state.SalePrice,
                SubCategory: this.state.SubCategory,
                PhotoLink: this.state.PhotoLink
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
                this.refreshList();
            }, (error) => {
                alert('Failed');
            })
    }


    updateClick() {
        fetch(variables.API_URL + 'product', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ProductId: this.state.ProductId,
                ProductName: this.state.ProductName,
                ShopCode: 1,
                BarCode: this.state.BarCode,
                Brand: this.state.Brand,
                Category: this.state.Category,
                ProductCode: this.state.ProductCode,
                ProductDescr: this.state.ProductDescr,
                PromoActive: this.state.PromoActive,
                PromoEndAt: this.state.PromoEndAt,
                PromoInitAt: this.state.PromoInitAt,
                PromoSalePrice: this.state.PromoSalePrice,
                SalePrice: this.state.SalePrice,
                SubCategory: this.state.SubCategory,
                PhotoLink: this.state.PhotoLink
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
                this.refreshList();
            }, (error) => {
                alert('Failed');
            })
    }

    deleteClick(id) {
        if (window.confirm('Are you sure?')) {
            fetch(variables.API_URL + 'product/' + id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then((result) => {
                    alert(result);
                    this.refreshList();
                }, (error) => {
                    alert('Failed');
                })
        }
    }


    render() {
        const {
            products,
            modalTitle,
            ProductName,
            ProductId,
            BarCode,
            Brand,
            Category,
            ProductCode,
            ProductDescr,
            PromoActive,
            PromoEndAt,
            PromoInitAt,
            PromoSalePrice,
            SalePrice,
            SubCategory,
            PhotoLink

        } = this.state;

        return (
            <div>
                <button type="button"
                    className="btn btn-primary m-2 float-end"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => this.addClick()}>
                    Add Product
                </button>
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <th>
                                ProductId
                            </th>
                            <th>
                                ProductName
                            </th>
                            <th>
                                ShopCode
                            </th>
                            <th>
                                BarCode
                            </th>
                            <th>
                                Brand
                            </th>
                            <th>
                                Category
                            </th>
                            <th>
                                ProductCode
                            </th>
                            <th>
                                ProductDescr
                            </th>
                            <th>
                                PromoActive
                            </th>
                            <th>
                                PromoEndAt
                            </th>
                            <th>
                                PromoInitAt
                            </th>
                            <th>
                                PromoSalePrice
                            </th>
                            <th>
                                SalePrice
                            </th>
                            <th>
                                SubCategory
                            </th>
                            <th>
                                PhotoLink
                            </th>
                            <th>
                                Options
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(prod =>
                            <tr key={prod.ProductId}>
                                <td>{prod.ProductId}</td>
                                <td>{prod.ProductName}</td>
                                <td>{prod.ShopCode}</td>
                                <td>{prod.BarCode}</td>
                                <td>{prod.Brand}</td>
                                <td>{prod.Category}</td>
                                <td>{prod.ProductDescr}</td>
                                <td>{prod.PromoActive}</td>
                                <td>{prod.PromoEndAt}</td>
                                <td>{prod.PromoInitAt}</td>
                                <td>{prod.PromoSalePrice}</td>
                                <td>{prod.SalePrice}</td>
                                <td>{prod.SubCategory}</td>
                                <td>{prod.PhotoLink}</td>
                                <td>
                                    <button type="button"
                                        className="btn btn-light mr-1"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        onClick={() => this.editClick(prod)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                        </svg></button>
                                    <button type="button" className="btn btn-light mr-1"
                                        onClick={() => this.deleteClick(prod.ProductId)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                        </svg></button>
                                </td>
                            </tr>
                        )}
                    </tbody>


                </table>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{modalTitle}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">

                                </button>
                            </div>

                            <div className="modal-body">
                                    <div className="row">
                                        <div className="p-2 w-50 bd-highlight">
                                            <div className="input-group mb-2">
                                                <label>Código do Produto: </label>
                                            </div>
                                            <div className="input-group mb-3">
                                                <input type="number" className="form-control" value={ProductCode} onChange={this.changeProductCode} />
                                            </div>
                                        </div>

                                        <div className="p-2 w-50 bd-highlight">
                                            <div className="input-group mb-2">
                                                <label>Código de Barras: </label>
                                            </div>
                                            <div className="input-group mb-3">
                                                <input type="number" className="form-control" value={BarCode} onChange={this.changeBarCode} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">

                                        <div className="p-2 w-50 bd-highlight">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">Nome do Produto</span>
                                                <input type="text" className="form-control" value={ProductName} onChange={this.changeProductName} />
                                            </div>
                                        </div>
                                        <div className="p-2 w-50 bd-highlight">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">Marca</span>
                                                <input type="text" className="form-control" value={Brand} onChange={this.changeBrand} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="p-2 bd-highlight">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">Descrição</span>
                                                <textarea className="form-control" value={ProductDescr} onChange={this.changeProductDescr} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">


                                        <div className="p-2 w-50 bd-highlight">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">Categoria</span>
                                                <input type="text" className="form-control" value={Category} onChange={this.changeCategory} />
                                            </div>
                                        </div>
                                        <div className="p-2 w-50 bd-highlight">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">SubCategoria</span>
                                                <input type="text" className="form-control" value={SubCategory} onChange={this.changeSubCategory} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">

                                        <div className="p-2 w-50 bd-highlight">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">Preço</span>
                                                <input type="number" className="form-control" value={SalePrice} onChange={this.changeSalePrice} />
                                            </div>
                                        </div>
                                        <div className="p-2 w-50 bd-highlight">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">Link da Foto</span>
                                                <input type="text" className="form-control" value={PhotoLink} onChange={this.changePhotoLink} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">

                                        <div className="p-2 w-50 bd-highlight">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">Em promoção? </span>

                                                <input type="checkbox" value={PromoActive} onChange={this.changePromoActive} />
                                            </div>
                                        </div>
                                        <div className="p-2 w-50 bd-highlight">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">Preço Promocional</span>
                                                <input type="number" className="form-control" value={PromoSalePrice} onChange={this.changePromoSalePrice} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">

                                        <div className="p-2 w-50 bd-highlight">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">Data Início da Promoção</span>
                                                <input type="date" className="form-control" value={PromoInitAt} onChange={this.changePromoInitAt} />
                                            </div>
                                        </div>
                                        <div className="p-2 w-50 bd-highlight">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">Data Término da Promoção</span>
                                                <input type="date" className="form-control" value={PromoEndAt} onChange={this.changePromoEndAt} />
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="modal-footer">
                                {ProductId === 0 ?
                                    <button type="button"
                                        className="btn btn-primary float-start"
                                        onClick={() => this.createClick()}
                                    >Create
                                    </button> : null

                                }
                                {ProductId !== 0 ?
                                    <button type="button"
                                        className="btn btn-primary float-start"
                                        onClick={() => this.updateClick()}>
                                        Update
                                    </button> : null

                                }
                            </div>



                        </div>
                    </div>
                </div>
            </div >
        )
    }
}