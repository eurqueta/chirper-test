import Ember from 'ember';

export default Ember.Component.extend({
  classNames : ["status-update"],
  actions: {
    showAlert: function(){
      sweetAlert('Lo siento','Funcion no disponible','error');
    }
  }
});
