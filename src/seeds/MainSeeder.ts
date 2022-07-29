import { DataSource } from 'typeorm'
import { runSeeder, Seeder, SeederFactoryManager } from 'typeorm-extension'
import { UserSeeder } from './UserSeeder'

export class MainSeeder implements Seeder {
	async run(
		dataSource: DataSource,
		factoryManager: SeederFactoryManager
	): Promise<void> {
		await runSeeder(dataSource, UserSeeder)
	}
}
