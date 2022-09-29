gdjs.SondaParkerCode = {};
gdjs.SondaParkerCode.GDSondaParkerObjects1= [];
gdjs.SondaParkerCode.GDSondaParkerObjects2= [];
gdjs.SondaParkerCode.GDProximoObjects1= [];
gdjs.SondaParkerCode.GDProximoObjects2= [];
gdjs.SondaParkerCode.GDdescriaoDoParkeObjects1= [];
gdjs.SondaParkerCode.GDdescriaoDoParkeObjects2= [];
gdjs.SondaParkerCode.GDproximoObjects1= [];
gdjs.SondaParkerCode.GDproximoObjects2= [];
gdjs.SondaParkerCode.GDvoltarObjects1= [];
gdjs.SondaParkerCode.GDvoltarObjects2= [];

gdjs.SondaParkerCode.conditionTrue_0 = {val:false};
gdjs.SondaParkerCode.condition0IsTrue_0 = {val:false};
gdjs.SondaParkerCode.condition1IsTrue_0 = {val:false};


gdjs.SondaParkerCode.eventsList0 = function(runtimeScene) {

{


gdjs.SondaParkerCode.condition0IsTrue_0.val = false;
{
gdjs.SondaParkerCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SondaParkerCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("voltar"), gdjs.SondaParkerCode.GDvoltarObjects1);
{for(var i = 0, len = gdjs.SondaParkerCode.GDvoltarObjects1.length ;i < len;++i) {
    gdjs.SondaParkerCode.GDvoltarObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("proximo"), gdjs.SondaParkerCode.GDproximoObjects1);

gdjs.SondaParkerCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SondaParkerCode.GDproximoObjects1.length;i<l;++i) {
    if ( gdjs.SondaParkerCode.GDproximoObjects1[i].getBehavior("Arrastável").isDragged() ) {
        gdjs.SondaParkerCode.condition0IsTrue_0.val = true;
        gdjs.SondaParkerCode.GDproximoObjects1[k] = gdjs.SondaParkerCode.GDproximoObjects1[i];
        ++k;
    }
}
gdjs.SondaParkerCode.GDproximoObjects1.length = k;}if (gdjs.SondaParkerCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("descriaoDoParke"), gdjs.SondaParkerCode.GDdescriaoDoParkeObjects1);
/* Reuse gdjs.SondaParkerCode.GDproximoObjects1 */
gdjs.copyArray(runtimeScene.getObjects("voltar"), gdjs.SondaParkerCode.GDvoltarObjects1);
{for(var i = 0, len = gdjs.SondaParkerCode.GDdescriaoDoParkeObjects1.length ;i < len;++i) {
    gdjs.SondaParkerCode.GDdescriaoDoParkeObjects1[i].setAnimationName("d2");
}
}{for(var i = 0, len = gdjs.SondaParkerCode.GDproximoObjects1.length ;i < len;++i) {
    gdjs.SondaParkerCode.GDproximoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.SondaParkerCode.GDvoltarObjects1.length ;i < len;++i) {
    gdjs.SondaParkerCode.GDvoltarObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("voltar"), gdjs.SondaParkerCode.GDvoltarObjects1);

gdjs.SondaParkerCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SondaParkerCode.GDvoltarObjects1.length;i<l;++i) {
    if ( gdjs.SondaParkerCode.GDvoltarObjects1[i].getBehavior("Arrastável").isDragged() ) {
        gdjs.SondaParkerCode.condition0IsTrue_0.val = true;
        gdjs.SondaParkerCode.GDvoltarObjects1[k] = gdjs.SondaParkerCode.GDvoltarObjects1[i];
        ++k;
    }
}
gdjs.SondaParkerCode.GDvoltarObjects1.length = k;}if (gdjs.SondaParkerCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("descriaoDoParke"), gdjs.SondaParkerCode.GDdescriaoDoParkeObjects1);
gdjs.copyArray(runtimeScene.getObjects("proximo"), gdjs.SondaParkerCode.GDproximoObjects1);
/* Reuse gdjs.SondaParkerCode.GDvoltarObjects1 */
{for(var i = 0, len = gdjs.SondaParkerCode.GDdescriaoDoParkeObjects1.length ;i < len;++i) {
    gdjs.SondaParkerCode.GDdescriaoDoParkeObjects1[i].setAnimationName("d1");
}
}{for(var i = 0, len = gdjs.SondaParkerCode.GDvoltarObjects1.length ;i < len;++i) {
    gdjs.SondaParkerCode.GDvoltarObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.SondaParkerCode.GDproximoObjects1.length ;i < len;++i) {
    gdjs.SondaParkerCode.GDproximoObjects1[i].hide(false);
}
}}

}


};

gdjs.SondaParkerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SondaParkerCode.GDSondaParkerObjects1.length = 0;
gdjs.SondaParkerCode.GDSondaParkerObjects2.length = 0;
gdjs.SondaParkerCode.GDProximoObjects1.length = 0;
gdjs.SondaParkerCode.GDProximoObjects2.length = 0;
gdjs.SondaParkerCode.GDdescriaoDoParkeObjects1.length = 0;
gdjs.SondaParkerCode.GDdescriaoDoParkeObjects2.length = 0;
gdjs.SondaParkerCode.GDproximoObjects1.length = 0;
gdjs.SondaParkerCode.GDproximoObjects2.length = 0;
gdjs.SondaParkerCode.GDvoltarObjects1.length = 0;
gdjs.SondaParkerCode.GDvoltarObjects2.length = 0;

gdjs.SondaParkerCode.eventsList0(runtimeScene);
return;

}

gdjs['SondaParkerCode'] = gdjs.SondaParkerCode;
