    function secondHighest(arr) {
            // Convert all elements to numbers
            arr = arr.map(Number);

            // Remove duplicates by creating a Set, then convert back to an array
            arr = [...new Set(arr)];

            // Sort the array in descending order
            arr.sort((a, b) => b - a);

            // Check if there are at least two unique elements
            if (arr.length < 2) {
                return "Second highest element not found. Array has fewer than two unique elements.";
            }

            // Return the second element (second highest)
            return arr[1];
        }

        function Main() {
            var n = prompt("Enter the number of elements:");
            if (!n || isNaN(n) || n <= 0) {
                alert("Please enter a valid number greater than 0.");
                return;
            }

            var arr = [];
            for (var i = 0; i < n; i++) {
                arr[i] = prompt("Enter element " + (i + 1) + ":");
            }

            alert("Second highest number: " + secondHighest(arr));
        }

        Main();
