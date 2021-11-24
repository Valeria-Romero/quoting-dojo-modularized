const express = require( 'express' );
const QuoteRouter = express.Router();
const {QuoteController} = require('../controllers/quoteController');

QuoteRouter
    .route('/')
    .get( QuoteController.loadMainPage );

QuoteRouter
    .route( '/quotes' )
    .get( QuoteController.loadQuotes )
    .post( QuoteController.createQuote );

module.exports = {QuoteRouter};