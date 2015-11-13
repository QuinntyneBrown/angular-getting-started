(function () {

    "use strict";

    function HomeComponent() {
        var self = this;

        self.videos = [
            {
                id: 'VdxTkx4qnKg',
                name: 'angular_hackathon'
            },
            {
                id: 'cgSJlAOmQE4',
                name: 'technology_radar'
            },
            {
                id: '4YmnbGoh49U',
                name: 'sngulsr_2_better_concepts_less_code'
            }
        ];

        
        return self;
    }

    ngX.Component({
        component: HomeComponent
    });

})();


