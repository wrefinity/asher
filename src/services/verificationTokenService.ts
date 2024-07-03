import { prismaClient } from "..";
import {generateUniqueToken} from "../utils/generateToken" 


const DEFAULT_EXPIRATION_DAYS = 1; // Default expiration in days

export async function createVerificationToken(userId: BigInt): Promise<string> {
    try {
        // Generate a unique token
        const token = generateUniqueToken();

        // Calculate expiration time
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + DEFAULT_EXPIRATION_DAYS);

        // Save verification token in database with expiration time
        const verificationToken = await prismaClient.verificationToken.create({
            data: {
                token,
                userId,
                expiresAt: expirationDate,
            },
        });

        return verificationToken;
    } catch (error) {
        throw new Error("Failed to create verification token");
    }
}

export async function validateVerificationToken(token: string): Promise<boolean> {
    try {
        const verificationToken = await prismaClient.verificationToken.findFirst({
            where: {
                token,
                expiresAt: {
                    gte: new Date(),
                },
            },
        });

        return !!verificationToken; // Return true if token exists and is valid
    } catch (error) {
        console.error('Error validating verification token:', error);
        throw new Error('Failed to validate verification token');
    }
}

