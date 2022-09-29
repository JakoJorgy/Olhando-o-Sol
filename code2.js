gdjs.inicioCode = {};
gdjs.inicioCode.GDInicioObjects1= [];
gdjs.inicioCode.GDInicioObjects2= [];
gdjs.inicioCode.GDSobreObjects1= [];
gdjs.inicioCode.GDSobreObjects2= [];
gdjs.inicioCode.GDbvObjects1= [];
gdjs.inicioCode.GDbvObjects2= [];
gdjs.inicioCode.GDjogarObjects1= [];
gdjs.inicioCode.GDjogarObjects2= [];

gdjs.inicioCode.conditionTrue_0 = {val:false};
gdjs.inicioCode.condition0IsTrue_0 = {val:false};
gdjs.inicioCode.condition1IsTrue_0 = {val:false};


gdjs.inicioCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("jogar"), gdjs.inicioCode.GDjogarObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.inicioCode.GDjogarObjects1.length !== 0 ? gdjs.inicioCode.GDjogarObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("jogar"), gdjs.inicioCode.GDjogarObjects1);

gdjs.inicioCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.inicioCode.GDjogarObjects1.length;i<l;++i) {
    if ( gdjs.inicioCode.GDjogarObjects1[i].getBehavior("Arrastável").isDragged() ) {
        gdjs.inicioCode.condition0IsTrue_0.val = true;
        gdjs.inicioCode.GDjogarObjects1[k] = gdjs.inicioCode.GDjogarObjects1[i];
        ++k;
    }
}
gdjs.inicioCode.GDjogarObjects1.length = k;}if (gdjs.inicioCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Principal", false);
}}

}


};

gdjs.inicioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.inicioCode.GDInicioObjects1.length = 0;
gdjs.inicioCode.GDInicioObjects2.length = 0;
gdjs.inicioCode.GDSobreObjects1.length = 0;
gdjs.inicioCode.GDSobreObjects2.length = 0;
gdjs.inicioCode.GDbvObjects1.length = 0;
gdjs.inicioCode.GDbvObjects2.length = 0;
gdjs.inicioCode.GDjogarObjects1.length = 0;
gdjs.inicioCode.GDjogarObjects2.length = 0;

gdjs.inicioCode.eventsList0(runtimeScene);
return;

}

gdjs['inicioCode'] = gdjs.inicioCode;
