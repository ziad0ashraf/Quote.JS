let Quotes=[
    {
        'quote':'“Be yourself; everyone else is already taken.”',
        'author':'― Oscar Wilde'
    },
    {
        'quote':'“So many books, so little time.”',
        'author':'― Frank Zappa'
    },
    {
        'quote':'“A room without books is like a body without a soul.”',
        'author':'― Marcus Tullius Cicero'
    },
    {
        'quote':'“Be the change that you wish to see in the world.”',
        'author':'― Mahatma Gandhi'
    },
    {
        'quote':'“It is better to be hated for what you are than to be loved for what you are not.”',
        'author':'― Andre Gide'
    },
    {
        'quote':'“It is our choices, Harry, that show what we truly are, far more than our abilities.”',
        'author':'― J.K. Rowling'
    },
    {
        'quote':'"Do not take life too seriously. You will not get out alive."',
        'author':'―Elbert Hubbard'
    },

]



function addQuote(){
    let cartona=""
    let random= Math.floor(Math.random() * Quotes.length)
    cartona=`
    <div class="col-md-12 d-flex flex-column justify-content-center align-items-center text-center" >
    <div>
        <p class="fs-3">${Quotes[random].quote}</p>
        <p class="fs-3">${Quotes[random].author}</p>
    </div>
    </div>
    `
    document.getElementById('demo').innerHTML=cartona
}








