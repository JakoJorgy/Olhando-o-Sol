gdjs.sistemaSolarCode = {};
gdjs.sistemaSolarCode.GDfundoObjects1= [];
gdjs.sistemaSolarCode.GDfundoObjects2= [];
gdjs.sistemaSolarCode.GDsondaObjects1= [];
gdjs.sistemaSolarCode.GDsondaObjects2= [];
gdjs.sistemaSolarCode.GDNewObjectObjects1= [];
gdjs.sistemaSolarCode.GDNewObjectObjects2= [];
gdjs.sistemaSolarCode.GDobstaculoObjects1= [];
gdjs.sistemaSolarCode.GDobstaculoObjects2= [];
gdjs.sistemaSolarCode.GDventoSolarObjects1= [];
gdjs.sistemaSolarCode.GDventoSolarObjects2= [];
gdjs.sistemaSolarCode.GDpilotoObjects1= [];
gdjs.sistemaSolarCode.GDpilotoObjects2= [];
gdjs.sistemaSolarCode.GDNewObject2Objects1= [];
gdjs.sistemaSolarCode.GDNewObject2Objects2= [];

gdjs.sistemaSolarCode.conditionTrue_0 = {val:false};
gdjs.sistemaSolarCode.condition0IsTrue_0 = {val:false};
gdjs.sistemaSolarCode.condition1IsTrue_0 = {val:false};


gdjs.sistemaSolarCode.mapOfGDgdjs_46sistemaSolarCode_46GDsondaObjects1Objects = Hashtable.newFrom({"sonda": gdjs.sistemaSolarCode.GDsondaObjects1});
gdjs.sistemaSolarCode.mapOfGDgdjs_46sistemaSolarCode_46GDobstaculoObjects1Objects = Hashtable.newFrom({"obstaculo": gdjs.sistemaSolarCode.GDobstaculoObjects1});
gdjs.sistemaSolarCode.mapOfGDgdjs_46sistemaSolarCode_46GDobstaculoObjects1Objects = Hashtable.newFrom({"obstaculo": gdjs.sistemaSolarCode.GDobstaculoObjects1});
gdjs.sistemaSolarCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("sonda"), gdjs.sistemaSolarCode.GDsondaObjects1);

gdjs.sistemaSolarCode.condition0IsTrue_0.val = false;
{
}if (gdjs.sistemaSolarCode.condition0IsTrue_0.val) {
/* Reuse gdjs.sistemaSolarCode.GDsondaObjects1 */
{for(var i = 0, len = gdjs.sistemaSolarCode.GDsondaObjects1.length ;i < len;++i) {
    gdjs.sistemaSolarCode.GDsondaObjects1[i].addPolarForce(90, 40, 0);
}
}}

}


{


gdjs.sistemaSolarCode.condition0IsTrue_0.val = false;
{
gdjs.sistemaSolarCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.sistemaSolarCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("sonda"), gdjs.sistemaSolarCode.GDsondaObjects1);
{for(var i = 0, len = gdjs.sistemaSolarCode.GDsondaObjects1.length ;i < len;++i) {
    gdjs.sistemaSolarCode.GDsondaObjects1[i].addPolarForce(0, 50, 0);
}
}}

}


{


gdjs.sistemaSolarCode.condition0IsTrue_0.val = false;
{
gdjs.sistemaSolarCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.sistemaSolarCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("sonda"), gdjs.sistemaSolarCode.GDsondaObjects1);
{for(var i = 0, len = gdjs.sistemaSolarCode.GDsondaObjects1.length ;i < len;++i) {
    gdjs.sistemaSolarCode.GDsondaObjects1[i].addPolarForce(180, 50, 0);
}
}}

}


{


gdjs.sistemaSolarCode.condition0IsTrue_0.val = false;
{
gdjs.sistemaSolarCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.sistemaSolarCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("sonda"), gdjs.sistemaSolarCode.GDsondaObjects1);
{for(var i = 0, len = gdjs.sistemaSolarCode.GDsondaObjects1.length ;i < len;++i) {
    gdjs.sistemaSolarCode.GDsondaObjects1[i].addPolarForce(270, 50, 0);
}
}}

}


{


gdjs.sistemaSolarCode.condition0IsTrue_0.val = false;
{
gdjs.sistemaSolarCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.sistemaSolarCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("sonda"), gdjs.sistemaSolarCode.GDsondaObjects1);
{for(var i = 0, len = gdjs.sistemaSolarCode.GDsondaObjects1.length ;i < len;++i) {
    gdjs.sistemaSolarCode.GDsondaObjects1[i].addPolarForce(90, 50, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("obstaculo"), gdjs.sistemaSolarCode.GDobstaculoObjects1);
gdjs.copyArray(runtimeScene.getObjects("sonda"), gdjs.sistemaSolarCode.GDsondaObjects1);

gdjs.sistemaSolarCode.condition0IsTrue_0.val = false;
{
gdjs.sistemaSolarCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sistemaSolarCode.mapOfGDgdjs_46sistemaSolarCode_46GDsondaObjects1Objects, gdjs.sistemaSolarCode.mapOfGDgdjs_46sistemaSolarCode_46GDobstaculoObjects1Objects, false, runtimeScene, false);
}if (gdjs.sistemaSolarCode.condition0IsTrue_0.val) {
/* Reuse gdjs.sistemaSolarCode.GDobstaculoObjects1 */
/* Reuse gdjs.sistemaSolarCode.GDsondaObjects1 */
{for(var i = 0, len = gdjs.sistemaSolarCode.GDsondaObjects1.length ;i < len;++i) {
    gdjs.sistemaSolarCode.GDsondaObjects1[i].separateFromObjectsList(gdjs.sistemaSolarCode.mapOfGDgdjs_46sistemaSolarCode_46GDobstaculoObjects1Objects, false);
}
}}

}


{


gdjs.sistemaSolarCode.condition0IsTrue_0.val = false;
{
gdjs.sistemaSolarCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.sistemaSolarCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("obstaculo"), gdjs.sistemaSolarCode.GDobstaculoObjects1);
{for(var i = 0, len = gdjs.sistemaSolarCode.GDobstaculoObjects1.length ;i < len;++i) {
    gdjs.sistemaSolarCode.GDobstaculoObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("piloto"), gdjs.sistemaSolarCode.GDpilotoObjects1);

gdjs.sistemaSolarCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sistemaSolarCode.GDpilotoObjects1.length;i<l;++i) {
    if ( gdjs.sistemaSolarCode.GDpilotoObjects1[i].getBehavior("Arrastável").isDragged() ) {
        gdjs.sistemaSolarCode.condition0IsTrue_0.val = true;
        gdjs.sistemaSolarCode.GDpilotoObjects1[k] = gdjs.sistemaSolarCode.GDpilotoObjects1[i];
        ++k;
    }
}
gdjs.sistemaSolarCode.GDpilotoObjects1.length = k;}if (gdjs.sistemaSolarCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "solar", false);
}}

}


};

gdjs.sistemaSolarCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.sistemaSolarCode.GDfundoObjects1.length = 0;
gdjs.sistemaSolarCode.GDfundoObjects2.length = 0;
gdjs.sistemaSolarCode.GDsondaObjects1.length = 0;
gdjs.sistemaSolarCode.GDsondaObjects2.length = 0;
gdjs.sistemaSolarCode.GDNewObjectObjects1.length = 0;
gdjs.sistemaSolarCode.GDNewObjectObjects2.length = 0;
gdjs.sistemaSolarCode.GDobstaculoObjects1.length = 0;
gdjs.sistemaSolarCode.GDobstaculoObjects2.length = 0;
gdjs.sistemaSolarCode.GDventoSolarObjects1.length = 0;
gdjs.sistemaSolarCode.GDventoSolarObjects2.length = 0;
gdjs.sistemaSolarCode.GDpilotoObjects1.length = 0;
gdjs.sistemaSolarCode.GDpilotoObjects2.length = 0;
gdjs.sistemaSolarCode.GDNewObject2Objects1.length = 0;
gdjs.sistemaSolarCode.GDNewObject2Objects2.length = 0;

gdjs.sistemaSolarCode.eventsList0(runtimeScene);
return;

}

gdjs['sistemaSolarCode'] = gdjs.sistemaSolarCode;
