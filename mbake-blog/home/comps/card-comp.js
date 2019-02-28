
riot.tag2('card-comp', '<div class="cards-container"> <div class="columns"> <virtual each="{items}"> <div class="column col-6 col-sm-12"> <div class="card" riot-style="background-image: url(\'{img_url}\')"> <div class="card-top"> <button class="btn btn-primary" riot-style="--color: {color}">{topic}</button> <h3>{title}</h3> <div>{date} | Eldred Braun</div> </div> <div class="card-bottom"><a href="{url}"> <button class="btn btn-primary">read More</button></a></div> </div> </div> </virtual> </div> </div>', '', '', function(opts) {
    console.info('oh hi tag');
    this.on('*', function(evt) {
        console.info('riot', evt);
    });
    this.items = [];
    thiz = this;

    this.render = function(data) {
        console.info(data);
        if(!data ) {
            thiz.items = [];
            thiz.update();
            return;
        }
        console.info(Object.keys(data[0]));

        let cloned = JSON.parse(JSON.stringify(data));
        thiz.items = cloned;

        let sz = thiz.items.length;
        for(i = 0; i < sz; i++) {
              var item = thiz.items[i];

              item.url = '/posts/' + item.url;
              console.info(item.url);
          }

        thiz.update();

    }.bind(this)
});