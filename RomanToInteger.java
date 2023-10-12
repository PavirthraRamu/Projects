import java.util.Scanner;

public class RomanToInteger{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a Roman numeral: ");
        String romanNumeral = scanner.nextLine().toUpperCase();
        scanner.close();

        int result = romanToInteger(romanNumeral);

        if (result != -1) {
            System.out.println("The equivalent integer is: " + result);
        } else {
            System.out.println("Invalid Roman numeral entered.");
        }
    }

    public static int romanToInteger(String s) {
        
        int[] values = { 1000, 500, 100, 50, 10, 5, 1 };
        char[] numerals = { 'M', 'D', 'C', 'L', 'X', 'V', 'I' };

        int result = 0;
        int prevValue = 0;

        for (int i = s.length() - 1; i >= 0; i--) {
            char currentChar = s.charAt(i);
            int currentValue = 0;

            for (int j = 0; j < numerals.length; j++) {
                if (numerals[j] == currentChar) {
                    currentValue = values[j];
                    break;
                }
            }

            if (currentValue == 0) {
                return -1;
            }

            if (currentValue < prevValue) {
                result -= currentValue;
            } else {
                result += currentValue;
            }

            prevValue = currentValue;
        }

        return result;
    }
}
