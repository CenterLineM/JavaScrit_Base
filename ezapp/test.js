console.log('test OK')

node.status({text:"started"});

setTimeout(function() {
    node.status({fill:"red",shape:"ring",text:"stage 1"});
    
    setTimeout(function() {
        node.status({fill:"green",shape:"dot",text:"stage 2"});
        node.error("This is an error", {'payload' : 'Caught error'});

        setTimeout(function() {
            node.error("Second error");
            node.status({});
            node.send({'payload' : 'Completed'});
        }, 1000);

    }, 1000);

}, 1000);

node.warn("Exiting node");
return;
