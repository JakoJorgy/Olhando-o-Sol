gdjs.solarCode = {};
gdjs.solarCode.GDfundoObjects1= [];
gdjs.solarCode.GDfundoObjects2= [];
gdjs.solarCode.GDsistemaSObjects1= [];
gdjs.solarCode.GDsistemaSObjects2= [];
gdjs.solarCode.GDobFundoObjects1= [];
gdjs.solarCode.GDobFundoObjects2= [];
gdjs.solarCode.GDventoSolarObjects1= [];
gdjs.solarCode.GDventoSolarObjects2= [];
gdjs.solarCode.GDpilotoObjects1= [];
gdjs.solarCode.GDpilotoObjects2= [];
gdjs.solarCode.GDNewObjectObjects1= [];
gdjs.solarCode.GDNewObjectObjects2= [];

gdjs.solarCode.conditionTrue_0 = {val:false};
gdjs.solarCode.condition0IsTrue_0 = {val:false};
gdjs.solarCode.condition1IsTrue_0 = {val:false};


gdjs.solarCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("sistemaS"), gdjs.solarCode.GDsistemaSObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.solarCode.GDsistemaSObjects1.length === 0 ) ? 0 :gdjs.solarCode.GDsistemaSObjects1[0].getPointY("")), "", 0);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.solarCode.GDfundoObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.solarCode.GDfundoObjects1.length === 0 ) ? 0 :gdjs.solarCode.GDfundoObjects1[0].getY()), "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("piloto"), gdjs.solarCode.GDpilotoObjects1);

gdjs.solarCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.solarCode.GDpilotoObjects1.length;i<l;++i) {
    if ( gdjs.solarCode.GDpilotoObjects1[i].getBehavior("Arrastável").isDragged() ) {
        gdjs.solarCode.condition0IsTrue_0.val = true;
        gdjs.solarCode.GDpilotoObjects1[k] = gdjs.solarCode.GDpilotoObjects1[i];
        ++k;
    }
}
gdjs.solarCode.GDpilotoObjects1.length = k;}if (gdjs.solarCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sistemaSolar", false);
}}

}


};

gdjs.solarCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.solarCode.GDfundoObjects1.length = 0;
gdjs.solarCode.GDfundoObjects2.length = 0;
gdjs.solarCode.GDsistemaSObjects1.length = 0;
gdjs.solarCode.GDsistemaSObjects2.length = 0;
gdjs.solarCode.GDobFundoObjects1.length = 0;
gdjs.solarCode.GDobFundoObjects2.length = 0;
gdjs.solarCode.GDventoSolarObjects1.length = 0;
gdjs.solarCode.GDventoSolarObjects2.length = 0;
gdjs.solarCode.GDpilotoObjects1.length = 0;
gdjs.solarCode.GDpilotoObjects2.length = 0;
gdjs.solarCode.GDNewObjectObjects1.length = 0;
gdjs.solarCode.GDNewObjectObjects2.length = 0;

gdjs.solarCode.eventsList0(runtimeScene);
return;

}

gdjs['solarCode'] = gdjs.solarCode;
