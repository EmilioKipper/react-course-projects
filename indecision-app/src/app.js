console.log('App.js is running!');

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer'
};

var template = (
    <div>
        <h1>Indecision App</h1>
        <p>{ app.title }</p>
        <p>{ app.subtitle }</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
)

// usando objeto
var user = {
    name: 'Andrew',
    age: 26,
    location: 'Carazinho'
};

// usando variaveis individuais
var userName = 'Mike';
var age = 14;
var userLocation = 'Carazinho';

function getLocation(location) {
    if (location) {
        return location
    } else {
        return 'Unknown'
    }
}

var templateTwo = (
    <div>
        <h1>{ user.name }</h1>
        <p>Age: { user.age }</p>
        <p>Location: { getLocation(user.location) }</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
