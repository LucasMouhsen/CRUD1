const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
const categories = ['in-sale','visited']
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products',{
			products,
			toThousand
		})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		res.render('detail',{
			product : products.find(product => product.id == req.params.id),
			toThousand
		})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form')
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
	},

	// Update - Form to edit
	edit: (req, res) => {
		const { id } = req.params;
		const product = products.find(product => product.id == id);
		res.render('product-edit-form',{
			product,
			categories
		})
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;