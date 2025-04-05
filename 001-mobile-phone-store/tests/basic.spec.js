// @ts-check
import { test, expect } from '@playwright/test'

test('Tiene cabecera la página', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  const h1 = page.locator('header h1')
  await expect(h1).toHaveText('Header')
})

test('Añadir producto al carrito', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  // Obtener el valor inicial del carrito y convertirlo a número
  const initialCartValueText = await page.locator('.header-cart-count').textContent()
  const initialCartValue = parseInt(initialCartValueText || '0', 10)

  // Hacer clic en el producto de la lista
  await page.click('.listView-container-item a')
  // Esperar a que se muestre el botón de acciones del producto
  await page.waitForSelector('.productActions-button', { state: 'visible' })
  // Hacer clic en el botón para añadir el producto
  await page.click('.productActions-button')
  // Esperar un momento para que se actualice el contador
  await page.waitForTimeout(1000)

  // Obtener el valor final del carrito
  const finalCartValueText = await page.locator('.header-cart-count').textContent()
  const finalCartValue = parseInt(finalCartValueText || '0', 10)

  // Comprobar que el valor del carrito ha incrementado en 1
  expect(finalCartValue).toBe(initialCartValue + 1)
})
