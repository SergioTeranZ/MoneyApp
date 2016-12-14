import { Injectable } from '@angular/core';
import firebase from 'firebase';


@Injectable()
export class UsersData {
	users: any;

  constructor() {
    this.users = firebase.database().ref('/userProfile');

  }


/* codigo del 2014 */

	/*	
		getUsersArray():any{
			var list :any;
			this.syncChanges(list,this.users);
			return list;
		}
		syncChanges(list, ref){
			ref.on('child_added',function _add(snap,prevChild){
				var data = snap.val();
				data.$id = snap.key;
				var pos = this.positionAfter(list,prevChild);
				list.splice(pos,0,data);
			});

			ref.on('child_removed', function _remove(snap) {
	    	var i = this.positionFor(list, snap.key);
	    	if( i > -1 ) {
	    	  list.splice(i, 1);
	    	}
	  	});

		  ref.on('child_changed', function _change(snap) {
		    var i = this.positionFor(list, snap.key);
		    if( i > -1 ) {
		      list[i] = snap.val();
		      list[i].$id = snap.key; // assumes data is always an object
		    }
		  });

		  ref.on('child_moved', function _move(snap, prevChild) {
		    var curPos = this.positionFor(list, snap.key);
		    if( curPos > -1 ) {
		      var data = list.splice(curPos, 1)[0];
		      var newPos = this.positionAfter(list, prevChild);
		      list.splice(newPos, 0, data);
		    }
		  });
		}
		positionAfter(list,prevChild){
			if( prevChild ==null ){
				return 0
			}else{
				var i = this.positionFor(list,prevChild);
				if ( i == -1 ){
					return list.lenght;
				}else{
					return i+1;
				}
			}
		}
		positionFor(list,key){
			for (var i =0, len = list.length; i < len; i++){
				if( list[i].$id == key ){
					return i;
				}
			}
			return -1;
		}
	*/
}
