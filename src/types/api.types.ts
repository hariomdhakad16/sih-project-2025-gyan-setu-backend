/**
 * Shared API type definitions for the JharkhandYatra backend.
 * These types define the standard response structure used across all endpoints.
 */

/**
 * Standard success response wrapper.
 * All successful API responses follow this structure.
 *
 * @template T - The type of data being returned
 */
export interface ApiResponse<T> {
    success: true;
    data: T;
    message?: string;
}

/**
 * Standard error response structure.
 * All error responses follow this format for consistency.
 */
export interface ApiErrorResponse {
    success: false;
    message: string;
    errors?: ValidationError[];
}

/**
 * Validation error details for field-level errors.
 * Used when request validation fails.
 */
export interface ValidationError {
    field: string;
    message: string;
}

/**
 * Pagination metadata returned with list endpoints.
 * Provides information for client-side pagination controls.
 */
export interface PaginationMeta {
    currentPage: number;
    totalPages: number;
    totalResults: number;
    limit: number;
}

/**
 * Paginated response wrapper for list endpoints.
 * Combines data array with pagination metadata.
 *
 * @template T - The type of items in the list
 */
export interface PaginatedResponse<T> {
    items: T[];
    pagination: PaginationMeta;
}

/**
 * Query parameters for paginated list endpoints.
 */
export interface PaginationQuery {
    page?: string;
    limit?: string;
}

/**
 * Location structure used across multiple entities.
 */
export interface Location {
    address: string;
    district: string;
    state: string;
    coordinates?: {
        lat: number;
        lng: number;
    };
}