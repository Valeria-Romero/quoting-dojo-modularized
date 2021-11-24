const {QuoteModel} = require( './../models/quoteModel' );

const QuoteController = {
    loadMainPage : function(request, response){
        return response.render('index');
    },

    createQuote : function(request, response){
        const creator = request.body.creator;
        const quote = request.body.quote;
        const created_at = new Date();
    
        const newQuote = {
            creator,
            quote,
            created_at
        };
    
        QuoteModel
            .createQuote( newQuote )
            .then( result =>{
                console.log(result);
            })
            .catch( err => {
                console.log("Somethign went wrong!");
                console.log(err);
            })
        response.redirect('/quotes')
    },

    loadQuotes : function( request, response){
        QuoteModel
            .getQuotes()
            .then( result =>{
                if (result === null){
                    throw new Error("There are no quotes here, add one!");
                }
                response.render('quotes', {found: true, quote: result});
            })
            .catch(error => {
                console.log(error);
                response.render('quotes', {found: false});
            });
    }
}

module.exports = {QuoteController};