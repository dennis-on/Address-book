var app = new function() {
  this.el = document.getElementById('address');
  this.address = [];
  this.Count = function(data) {
    var count   = document.getElementById('counter');
    var addr = 'Address';
    if (data) {
      if (data > 1) {
        addr = 'Addresses';
      }
      count.innerHTML = 'You have added ' + data + ' ' + addr ;
    } else {
      count.innerHTML = 'No ' + addr + ' added';
    }
  };
  
  this.FetchAll = function() {
    var data = '';
    if (this.address.length > 0) {
      for (i = 0; i < this.address.length; i++) {
        data += '<tr>';
        data += '<td>' + this.address[i] + '</td>';
        data += '<td><button class="button" onclick="app.Edit(' + i + ')">Edit</button></td>';
        data += '<td><button class="button" onclick="app.Delete(' + i + ')">Delete</button></td>';
        data += '</tr>';
      }
    }
    this.Count(this.address.length);
    return this.el.innerHTML = data;
  };
  this.Add = function () {
    el = document.getElementById('addName');
    var place = el.value;
    if (place) {
      this.address.push(place.trim());
      el.value = '';
      this.FetchAll();
    }
  };
  this.Edit = function (item) {
    var el = document.getElementById('editName');
    el.value = this.address[item];
    document.getElementById('saved').style.display = 'block';
    self = this;
    document.getElementById('saveEdit').onsubmit = function() {
      var place = el.value;
      if (place) {
        self.address.splice(item, 1, place.trim());
        self.FetchAll();
                CloseInput();
      }
    }
  };
  this.Delete = function (item) {
    this.address.splice(item, 1);
    this.FetchAll();
  };
  
}
app.FetchAll();
function CloseInput() {
  document.getElementById('saved').style.display = 'none';
}