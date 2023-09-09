import {
  CampaignAdded as CampaignAddedEvent,
  CampaignFunded as CampaignFundedEvent,
  CampaignPublished as CampaignPublishedEvent,
  CampaignRemoved as CampaignRemovedEvent,
  CampaignShrunk as CampaignShrunkEvent,
  UserAdded as UserAddedEvent
} from "../generated/CrowdFunder/CrowdFunder"
import {
  CampaignAdded,
  CampaignFunded,
  CampaignPublished,
  CampaignRemoved,
  CampaignShrunk,
  UserAdded
} from "../generated/schema"

export function handleCampaignAdded(event: CampaignAddedEvent): void {
  let entity = new CampaignAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._campaignAddress = event.params._campaignAddress
  entity._creator = event.params._creator
  entity._title = event.params._title
  entity._description = event.params._description
  entity._category = event.params._category
  entity._tags = event.params._tags
  entity._imageURI = event.params._imageURI

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCampaignFunded(event: CampaignFundedEvent): void {
  let entity = new CampaignFunded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._funder = event.params._funder
  entity._campaignAddress = event.params._campaignAddress
  entity._val = event.params._val
  entity._c_creator = event.params._c_creator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCampaignPublished(event: CampaignPublishedEvent): void {
  let entity = new CampaignPublished(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._campaignAddress = event.params._campaignAddress
  entity._creator = event.params._creator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCampaignRemoved(event: CampaignRemovedEvent): void {
  let entity = new CampaignRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._campaignAddress = event.params._campaignAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCampaignShrunk(event: CampaignShrunkEvent): void {
  let entity = new CampaignShrunk(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._withdrawer = event.params._withdrawer
  entity._campaignAddress = event.params._campaignAddress
  entity._val = event.params._val
  entity._c_creator = event.params._c_creator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUserAdded(event: UserAddedEvent): void {
  let entity = new UserAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._address = event.params._address
  entity._username = event.params._username
  entity._email = event.params._email
  entity._shipAddress = event.params._shipAddress
  entity._pfp = event.params._pfp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
