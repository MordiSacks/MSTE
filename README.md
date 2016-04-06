# MSTE
export html tables to csv and print

https://jsfiddle.net/7ckms8xo/6/

Change Log:
0.1
Added option to ignore cell by adding class "mste_no_export"
Warning
To remove a column you must add the class "mste_no_export" to all cells (th,td) 

Usage
```html
<table id="msTable">
	<thead>
		<tr>
			<th>
				First Name
			</th>
			<th>
				Last Name
			</th>
			<th>
				Sex
			</th>
			<th>
				Age
			</th>
			<th>
				Potato
			</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				Nelda
			</td>
			<td>
				Wink
			</td>
			<td>
				Female
			</td>
			<td>
				21
			</td>
			<td>
				yes
			</td>
		</tr>
		<tr>
			<td>
				Albertha
			</td>
			<td>
				Doss
			</td>
			<td>
				Female
			</td>
			<td>
				34
			</td>
			<td>
				yes
			</td>
		</tr>
		<tr>
			<td>
				Erich 
			</td>
			<td>
				Marsland
			</td>
			<td>
				Male
			</td>
			<td>
				27
			</td>
			<td>
				yes
			</td>
		</tr>
		<tr>
			<td>
				Moises
			</td>
			<td>
				Zuber
			</td>
			<td>
				Male
			</td>
			<td>
				27
			</td>
			<td>
				No
			</td>
		</tr>
	</tbody>
</table>
<script type="text/javascript">
  MSTE('msTable', 'my title', 'ltr').print();
  MSTE('msTable', 'my title', 'ltr').csv();
</script>
```
