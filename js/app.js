$(document).ready(function(){
    console.log('ready!');





    $('button').click(function(){

        $('#words').text('');

        var words = [
            'jawn',
            'cheeseteak',
            'iggles',
            'Wawa',
            'hoagie',
            'Comcast',
            'Phillies',
            'Pat\'s',
            'Geno\'s',
            'McNabb',
            'South Street',
            'special',
            'Utley',
            'phanatic',
            'Ben Franklin',
            'Yuengling',
            'MOVE',
            'sixers',
            'practice',
            'Manayunk',
            'Old City',
            'Italian Market',
            'Rocky',
            'Action News',
            'Valley Forge',
            'Flyers',
            'Broad Street',
            'bike race',
            'the wall',
            'roll',
            'Love Park',
            '95',
            'Betsy Ross',
            'Barnes',
            'Mummers',
            'water ice',
            'Rita\'s',
            'youse',
            'whiz',
            'wit',
            'scrapple',
            'beer distributor',
            'state store',
            'Jersey Shore',
            'Penn',
            'jimmies',
            'Kenso',
            'gravy',
            'Philly',
            'Eagles',
            'Temple',
            "Drexel",
            'Orange Line',
            'Frankford Hall',
            'Bob and Barbara\'s',
            'passyunk',
            'pretzel',
            'Tastykake',
            'Navy Yard',
            'Roots',
            'Schuylkill',
            'Blue Route',
            'bell',
            'Liberty Bell',
            'Penn’s Landing',
            'Independence Hall',
            'FDR',
            'Fishtown',
            'Point Breeze',
            'University City',
            'NoLibs',
            'Kensington',
            'Vet',
            'Citizen\'s Bank Park',
            'Frank Rizzo',
            'John Street',
            'Nutter',
            'Bob Brady',
            'Allen Iverson',
            'SEPTA',
            'wudder',
            'Spectrum',
            'Victory',
            'Reading Terminal Market',
            'tomato pie',
            'pork roll',
            'stromboli',
            'soft pretzel',
            'soda',
            'Cheez Whiz',















        ];

        function shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex ;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        }

        var optionOne = $("#amount").val();
        var optionTwo = $("#type").val();

        for ( j=0; j < optionOne; j++){

            shuffle(words);

            for ( i=0; i < optionTwo - 1; i++){

                $('#words').append( words[i] + ' ');

                }
            if ( optionTwo === '10') {
                $('#words').append(words[i] + '. ');

            }else if (optionTwo === '30') {

                $('#words').append(words[i] + '. </p><p>');

            }else {
                $('#words').append(words[i] + ' ');
            }

            }

    });

});
