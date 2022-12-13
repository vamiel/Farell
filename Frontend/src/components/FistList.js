import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CurrencyRupiah from "./rupiah";

const FishList = () => {
	const [fish, setFish] = useState([]);

	useEffect(() => {
		getFish();
	}, []);

	const getFish = async () => {
		const response = await axios.get("http://localhost:5000/products");
		setFish(response.data);
	};

	const deleteFish = async (productId) => {
		try {
			await axios.delete(`http://localhost:5000/products/${productId}`);
			getFish();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="container mt-5">
			<section class="hero is-link mb-5">
				<div class="hero-body">
					<p class="title is-3 is-spaced has-text-centered">IKAN ENDEMIK INDONESIA</p>
				</div>
			</section>
			<Link to="/add" className="button is-link">
				Tambah Ikan
			</Link>
			<div className="columns is-multiline mt-2 mr-2 ml-2">
				{fish.map((fish) => (
					<div className="column is-one-quarter" key={fish.id}>
						<div className="card">
							<div className="card-image">
								<figure className="image is-4by3">
									<img src={fish.url} alt="Product" />
								</figure>
							</div>
							<div className="card-content">
								<div className="media">
									<div className="media-content">
										<p className="title is-4">{fish.name}</p>
										<div className="content">
											<p className="subtitle is-6">{fish.description}</p>
										</div>
										<div className="content">
											<p className="subtitle is-4"><CurrencyRupiah value={fish.price} /></p>
										</div>
									</div>
								</div>
							</div>

							<footer className="card-footer">
								<Link to={`edit/${fish.id}`} className="card-footer-item">
									Edit
								</Link>
								<a
									onClick={() => deleteFish(fish.id)}
									className="card-footer-item"
									href="/#">
									Delete
								</a>
							</footer>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default FishList;
